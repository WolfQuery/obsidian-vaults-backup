Exercises have been generated.
<%*
  // Define the folder for all created files
  let targetFolder = "2.Activities/Process";

  // Ensure the target folder exists
  if (!app.vault.getAbstractFileByPath(targetFolder)) {
    tR += `The folder "${targetFolder}" does not exist. Please create it first.`;
    return;
  }

  // Create the first file using the "Master Personal OS Moc project" template
  let masterTemplate = "Master Personal OS Moc project";
  let masterTemplateFile = tp.file.find_tfile(masterTemplate);

  if (!masterTemplateFile) {
    tR += `Template "${masterTemplate}" not found. Exiting script.`;
    return;
  }

  let masterFileName = `Master_${tp.date.now("YYYYMMDD_HHmmss")}`;
  let masterFile = await tp.file.create_new(masterTemplateFile, masterFileName, false, targetFolder);

  if (!masterFile) {
    tR += "Failed to create the master file. Exiting script.";
    return;
  }

  // Get the link to the master file to use in the "Handled By" and "Context" properties
  let masterFileLink = `[[${masterFile.path}|${masterFile.basename}]]`;

  // Define the templates and their corresponding new file names
  let templates = [
    { template: "Finish backlog action template", fileNamePrefix: "1" },
    { template: "Think about some projects that could use a backlog template", fileNamePrefix: "2" },
    { template: "Reflect on why backlog is a cool feature template", fileNamePrefix: "3" },
    { template: "Get a nice coffee and some chocolate, you deserve it template", fileNamePrefix: "4" }
  ];

  // Loop through each template to create the other files
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
    let newFile = await tp.file.create_new(templateFile, newFileName, false, targetFolder);

    if (newFile) {
      let newFileContent = await app.vault.read(newFile);

      // Add or update frontmatter with "tags", "Context", and "Handled By"
      let updatedContent = newFileContent.replace(
        /^---\n([\s\S]*?)\n---/,
        `---\n$1\ntags:\n  - Task\nContext: "${masterFileLink}"\nHandled By: "${masterFileLink}"\n---`
      );

      // If no frontmatter exists, add it
      if (!/^---\n/.test(newFileContent)) {
        updatedContent = `---\ntags:\n  - Task\nContext: "${masterFileLink}"\nHandled By: "${masterFileLink}"\n---\n\n` + newFileContent;
      }

      // Write the updated content back to the new file
      await app.vault.modify(newFile, updatedContent);

      // Confirmation for this file
      //tR += `New file created: [[${newFileName}]] in folder: ${targetFolder}\nContext: ${masterFileLink}\nHandled By: ${masterFileLink}\n`;
    //} else {
      //tR += `Failed to create new file for template: ${template}\n`;
    }
  }

  //tR += `Master file created: [[${masterFileName}]] in folder: ${targetFolder}\n`;
%>
