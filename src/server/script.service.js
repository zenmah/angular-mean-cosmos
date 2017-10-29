const Script = require('./script.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getScripts(req, res) {
  const docquery = Script.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(Scripts => {
      res.status(200).json(Scripts);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}


function getScript(req, res) {

  const docquery = Script.findOne({name:req.params.name}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(Scripts => {
      res.status(200).json(Scripts);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}


function postScript(req, res) {
  const originalScript = { 
    name: req.body.name, 
    content: req.body.content, 
    sequence: parseInt(req.body.sequence , 10)
  };
  const script = new Script(originalScript);
  script.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(script);
    console.log('Script created successfully!');
  });
}


function putScript(req, res) {
  const originalScript = {
    _id: req.params.id,
    name: req.body.name,
    content: req.body.content,
    sequence: req.body.sequence
  };
  Script.findOne({ _id: originalScript._id }, (error, script) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, script)) return;

    script.name = originalScript.name;
    script.content = originalScript.content;
    script.sequence = originalScript.sequence;
    script.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(script);
      console.log('Script updated successfully!');
    });
  });
}

function deleteScript(req, res) {
  const id = parseInt(req.params.id, 10);
  Script.findOneAndRemove({ _id: id })
    .then(script => {
      if (!checkFound(res, script)) return;
      res.status(200).json(script);
      console.log('Script deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}


function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function checkFound(res, script) {
  if (!script) {
    res.status(404).send('Script not found.');
    return;
  }
  return script;
}

module.exports = {
  getScripts,
  postScript,
  getScript,
  putScript,
  deleteScript
};
