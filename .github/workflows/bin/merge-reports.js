import { mergeHTMLReports } from 'playwright-merge-html-reports';

const config = {
    outputFolderName: "merged-html-report", // default value
    outputBasePath: process.cwd() // default value
}

const folderNames = process.env.FOLDER_NAMES;
const folderNamesArr = folderNames.split('\n');

console.log('Merging the following reports:');
mergeHTMLReports(folderNamesArr.map((folderName) => {
    console.log('> '+ folderName);
    return `${process.cwd()}/${folderName}`;
}), config);
