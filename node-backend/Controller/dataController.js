const dataModel = require('../Model/dataModel');

exports.getAllData = (req, res) => {
    dataModel.query("SELECT * FROM appartement", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
}

exports.getDataById = (req, res) => {
    const query = 'SELECT * FROM appartement WHERE idApp = ?';
    const idApp = req.params.idApp;
  
    dataModel.query(query, [idApp], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Aucune donnée trouvée pour cet ID');
        return;
      }
  
      res.json(results[0]);
    });
  };

  exports.deleteData = (req, res) => {
    const query = 'DELETE FROM appartement WHERE idApp = ?';
    const idApp = req.params.idApp;
  
    dataModel.query(query, [idApp], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Aucune donnée trouvée pour cet ID');
        return;
      }
  
      res.json(results[0]);
    });
  };

  exports.updateData = (req, res) => {
    const query = 'UPDATE appartement SET ? WHERE idApp = ?';
    const idApp = req.params.idApp;
    const updateEmploye = req.body;
  
    dataModel.query(query,[updateEmploye, idApp], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Aucune donnée trouvée pour cet ID');
        return;
      }
  
      res.json(results[0]);
    });
  };

  exports.addData = (req, res) => {
    const query = 'INSERT INTO appartement(numApp, design, loyer) VALUES (?, ?, ?)';
    
    const {numApp, design, loyer} = req.body;
  
    dataModel.query(query,[numApp, design, loyer], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Aucune donnée trouvée pour cet ID');
        return;
      }
  
      res.json(results[0]);
    });
  };

  exports.getMinLoyer = (req, res) => {
    const query = 'SELECT MIN(loyer) AS minimale FROM appartement';
  
    dataModel.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
        return;
      } 
      res.json(results[0]);
    });
};


exports.getMaxLoyer = (req, res) => {
    const query = 'SELECT MAX(loyer) AS maximale FROM appartement';
  
    dataModel.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
        return;
      }  
      res.json(results[0]);
    });
};

exports.getSumLoyer = (req, res) => {
  const query = 'SELECT SUM(loyer) AS somme FROM appartement';

  dataModel.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur du serveur');
      return;
    }  
    res.json(results[0]);
  });
};
  