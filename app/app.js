import express from 'express';
import cors from 'cors';
import swaggerSetup from '../swagger.js';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna un mensaje de estado
 *     responses:
 *       200:
 *         description: Mensaje de estado
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: All fine[MOCHAJS]
 */
app.get('/', (req, res) => res.send('All fine[MOCHAJS]'));

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Retorna el perfil de un usuario
 *   
 *       200:  responses:
 *         description: Perfil de usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: alice
 *                 profile:
 *                   type: string
 *                   example: dev
 *                 age:
 *                   type: integer
 *                   example: 22
 */
app.get('/profile', (req, res) => {
  res.json({ name: 'alice', profile: 'dev', age: 22 });
});

// Configurar Swagger
swaggerSetup(app);

app.listen(port, () => console.log('run in port', port));

export default app;
