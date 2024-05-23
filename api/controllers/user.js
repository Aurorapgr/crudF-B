import { db } from "../db.js";

export const getUsers = (_,res)=>{
  const q = "SELECT * FROM usuarios";

  db.query(q,(err,data)=>{
    if (err) return res.json(err);

    return res.status(200).json(data)
  })

};

export const addUser = (req,res)=>{
  const q = "INSERT INTO usuarios(`name`,`mail`,`phone`,`borndate`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.mail,
    req.body.phone,
    req.body.borndate,
  ];

  db.query(q,[values],(err)=>{
    if(err) return res.json(err);
    return res.status(200).json("Usuário criado com sucesso")
  });
};


export const updateUser = (req,res)=>{
  const q = "UPDATE usuarios SET `name` = ?, `mail` = ?, `phone` = ?, `borndate` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.mail,
    req.body.phone,
    req.body.borndate,
  ];

  db.query(q,[...values,req.params.id],(err)=>{
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso")
  })
};

export const deleteUser = (req,res)=>{
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err)=>{
    if (err) return res.json(err);

    return res.status(200).json("Usuários deletado com sucesso")
  })
}

