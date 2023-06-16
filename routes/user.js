
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let Assignment = require('../model/assignment');
let User = require('../model/user');


async function login(req, res) {
    const { email, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Identifiants invalides' });
        }

        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Identifiants invalides' });
        }

        // Créer et retourner un token JWT valide
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };

        jwt.sign(
            payload,
            'Jn2028Tompoko&Atro',
            { expiresIn: '4h' },
            (error, token) => {
                if (error) {
                    throw error;
                }
                res.json({ token });
            }
        );
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

module.exports = { login };