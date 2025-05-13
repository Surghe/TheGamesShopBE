

let register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'All fields are required.' });
    }

    let user = await user.findOne({ email });


    if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
    }

    user = new user({ username, email, password });

    await user.save();

    const cart = new cart({ user: user._id, items: [] });

    await cart.save();

    user.cart = cart._id;
    await user.save();

    res.status(201).json({ userId: user._id, cartId: cart._id });

};


let login = async (req, res) => {
        const { email, password } = req.body;
       
        if( !email || !password) {
           return res.status(400).json({ msg: 'All Fields Are Required.'});
        }
       
        let user = await user.findOne({ email });
       
        if(!user) {
           res.status(400).json({ msg: 'Invaild Credentials'});
        }

        if(password !== user.password) {
            return res.status(401).json({msg: "Invaild Credentials" });
        }

        res.json({userId: user._id, cartId: user.cart});
    };

    export default {register, login};