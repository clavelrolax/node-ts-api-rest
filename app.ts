import express, { Application, Request, Response } from 'express';
import { forEachChild } from 'typescript';
const app: Application = express();
const PORT: number = 3000;
app.use(express.json());
// Data
const usuarios: { id: number; nombre: string }[] = [
    { id: 1, nombre: 'Ana Gomez' },
    { id: 2, nombre: 'Julio Vargas' },
    { id: 3, nombre: 'Jorge Chavez' },
];
// GET /api/v1/usuarios
app.get('/api/v2/usuarios', (req: Request, res: Response) => {
    res.status(200).json(usuarios);
});
// POST /api/v1/usuarios
app.post('/api/v2/usuarios', (req: Request, res: Response) => {
    const newUser = req.body;
    usuarios.push(newUser);
    res.status(201).json(newUser);
});

app.get('/api/v2/usuario/:tagId', function (req, res) {

    console.log('buscando ' + parseInt(req.params.tagId));
    var usuario;
    for (let o of usuarios) {
        console.log('buscando ' + o.id);
        console.log('buscando ' + req.params.tagId);
        if (o.id === parseInt(req.params.tagId)) {
            usuario = o;
        }
    }

    res.status(200).json(usuario);
});

app.listen(PORT, () => {
    console.log(`Servidor nodejs corriendo en el puerto : ${PORT}`);
});