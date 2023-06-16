const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const path = req.path;
    if (path === '/api/login') {
        // Passer au middleware suivant ou à la route
        return next();
    }

    // Récupérer le token d'authorization du header de la requête
    const token = req.header('Authorization');

    // Vérifier si le token existe
    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
    }

    const tokenWithoutBearer = token ? token.split(' ')[1] : null;

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(tokenWithoutBearer, 'Jn2028Tompoko&Atro');

        // Ajouter les informations du token décodé à l'objet de requête pour une utilisation ultérieure
        req.user = decoded.user;

        // Passer au middleware suivant ou à la route
        next();
    } catch (error) {
        // En cas d'erreur de vérification du token
        console.log(error)
        return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
    }
};

module.exports = {
    authMiddleware
};
