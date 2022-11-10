const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const { v4: uuid } = require('uuid');

app.use(express.json());
app.use(cors());

const readFiles = () => {
    const uploadedFiles = fs.readFileSync('./data/uploadedFiles.json');
    const filesData = JSON.parse(uploadedFiles);
    return filesData;
};

app.get('/files', (req, res) => {
    const uploadedList = readFiles();
    return res.status(200).json(uploadedList);
});

app.post('/files', (req, res) => {
    const uploadedList = readFiles();
    console.log(req.body);

    const newFileUpload = {
        id: uuid(),
        fileName: req.body.fileName,
        fileSize: req.body.fileSize,
        fileType: req.body.fileType
    };

    uploadedList.unshift(newFileUpload);

    fs.writeFileSync('./data/uploadedFiles.json', JSON.stringify(uploadedList));

    res.status(201).json(newFileUpload);
});

app.delete('/files', (req, res) => {
    console.log(req.params);
    const selectedFileId = req.params.fileId;
    // console.log(selectedFileId);
    const uploadedList = readFiles();
    console.log(uploadedList); // get rid of var on line below, just filter it. if that doesn't work try using a delete method on the array for the one you want to target
    const selectedFilteredList = uploadedList.filter(file => file.id !== selectedFileId);
    console.log(selectedFilteredList);

    fs.writeFileSync('./data/uploadedFiles.json', JSON.stringify(selectedFilteredList));

    res.status(204).json();
})

app.listen(8080,() => {
    console.log('Server is Running')
})