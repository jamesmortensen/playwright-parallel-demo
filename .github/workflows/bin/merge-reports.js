import { mergeHTMLReports } from 'playwright-merge-html-reports';

const folderNames = process.env.FOLDER_NAMES;

const folderNamesArr = folderNames.split('\n');

console.log('Merging the following reports:');
console.log('> '+ folderNamesArr[0]);
console.log('> '+ folderNamesArr[1]);


const reportsToMerge = folderNamesArr.map((folderName) => {
    return `${process.cwd()}/${folderName}`;
});

const config = {
    outputFolderName: "merged-html-report", // default value
    outputBasePath: process.cwd() // default value
}

mergeHTMLReports(reportsToMerge, config);
