const express = require('express');
const app = express();
const port = 3002;

const {body, validationResult} = require('express-validator');

// app.use(express.static('public'));
app.use(express.json());
app.use(express());

// app.post('/resgister', body("name").not().isEmpty(), (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()});
//     } else {
//         res.json({success: true})
//     };
//     const data = req.body;
//     console.log(data);
//     res.send(data);
// });

app.get('/name', (req, res) => {
    const data = req.body;
    res.send(data);
});

// {
// 	"name" :  "js",
// 	"email" :  "anar@test.com",
// 	"phone" :  "88888888",
// 	"password" :  "password4444" 
// }

app.post(
    "/register",
    body('name').not().isEmpty(),
    body('email')
        .isEmail()
        .custom(value => {
            if(value.includes('mstars')) {
                throw new Error('Not appropriate email!');
            }
            return true;
        }),
    body('phone').isNumeric().isLength({min: 8, max: 20}),
    body('password')
        .isLength({min: 6, max: 12})
        .withMessage('Password must be at least 6 characters long !'),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const data = res.body;
        res.json({
            success: true,
            data: data,
            message: 'success',
        });
    }
)

// {
// 	"type" :  "js",
// 	"username" :  "ANARAAA",
// 	"extention" :  "",
// 	"paragraph" :  "     randomrandomrandomrandom        " 
// }

app.post(
    "/sanitize", 
    body('type').replace(['js'], 'javascript'),
    body('username').toLowerCase(),
    body('extention').default('png'),
    body('paragraph').trim(),
    (req, res) => {
        const data = req.body;
        res.json({
            sucess: true,
            data: data,
            message: 'success'
        });
    }
)

app.listen(port, () => {
    console.log('listening', port);
});
