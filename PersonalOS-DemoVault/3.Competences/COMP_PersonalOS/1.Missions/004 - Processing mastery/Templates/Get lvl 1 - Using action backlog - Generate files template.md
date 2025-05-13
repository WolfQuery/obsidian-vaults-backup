<%*
  // Capture the link to the current file (originating file)
  let originalFileTitle = tp.file.title; // Title of the current file
  let originalFilePath = tp.file.path(true); // Full path of the current file
  let handledByLink = `[[${originalFilePath}|${originalFileTitle}]]`; // Markdown link with path and title

  // Get the folder path of the current file
  let folderPath = tp.file.folder(true); // Dynamically fetches the folder of the current file

  // Define the templates and their corresponding new file names
  let templates = [
    { template: "Finish backlog action template", fileNamePrefix: "1" },
    { template: "Delay backlog action template", fileNamePrefix: "2" },
    { template: "Edit backlog action template", fileNamePrefix: "3" }
  ];

  // Loop through each template to create new files
  for (let templateData of templates) {
    let { template, fileNamePrefix } = templateData;

    // Find the template file
    let templateFile = tp.file.find_tfile(template);
    if (!templateFile) {
      tR += `Template "${template}" not found. Skipping.\n`;
      continue;
    }

    // Generate a unique new file name
    let newFileName = `${fileNamePrefix}_${tp.date.now("YYYYMMDD_HHmmss")}`;

    // Create the new file from the template
    let newFile = await tp.file.create_new(templateFile, newFileName, false, folderPath);

    if (newFile) {
      let newFileContent = await app.vault.read(newFile);

      // Add or update frontmatter with "tags" and "Handled By"
      let updatedContent = newFileContent.replace(
        /^---\n([\s\S]*?)\n---/,
        `---\n$1\ntags:\n  - Task\nHandled By: "${handledByLink}"\n---`
      );

      // If no frontmatter exists, add it
      if (!/^---\n/.test(newFileContent)) {
        updatedContent = `---\ntags:\n  - Task\nHandled By: "${handledByLink}"\n---\n\n` + newFileContent;
      }

      // Write the updated content back to the new file
      await app.vault.modify(newFile, updatedContent);

      /* Confirmation for this file
      tR += `New file created: [[${newFileName}]] in folder: ${folderPath}\nHandled By: ${handledByLink}\n`;
    } else {
      tR += `Failed to create new file for template: ${template}\n`;
      */
    }
  }
%>
