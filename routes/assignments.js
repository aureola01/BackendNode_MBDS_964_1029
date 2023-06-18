let Assignment = require('../model/assignment');

// Récupérer tous les assignments (GET)
function getAssignmentsSansPagination(req, res) {
    Assignment.find((err, assignments) => {
        if (err) {
            res.send(err)
        }

        res.send(assignments);
    });
}

function getAssignments(req, res) {
    var aggregateQuery = Assignment.aggregate();

    Assignment.aggregatePaginate(aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, assignments) => {
            if (err) {
                console.log("err getAss"+err);
                res.status(500).send(err);
            }
            console.log(assignments)
            res.status(200).send(assignments);
        }
    );
}

// Récupérer un assignment par son id (GET)
function getAssignment(req, res) {
    let assignmentId = req.params.id;
    console.log("id assignment = " + assignmentId);
    Assignment.findOne({ id: assignmentId }, (err, assignment) => {
        console.log(assignment);
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        res.status(200).json(assignment);
    })
    console.log("get assignment by id " + res);
}

// Ajout d'un assignment (POST)
function postAssignment(req, res) {
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.title = req.body.title;
    assignment.rendered = req.body.rendered;
    assignment.author = req.body.author;
    assignment.subject = req.body.subject;
    assignment.rating = req.body.rating;
    assignment.remarks = req.body.remarks;
    assignment.deadline = req.body.deadline;

    console.log("POST assignment reçu :");
    console.log(assignment)
    console.log("deadline"+req.body.deadline)
    console.log("deadlineDate"+assignment.deadline)

    assignment.save((err) => {
        if (err) {
            res.status(500).send('cant post assignment '+ err);
        }
        res.json({ message: `${assignment.title} saved!` })
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);

    Assignment.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.status(200).json({ message: assignment.title + 'updated' })
        }

        // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: `${assignment.title} deleted` });
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };
