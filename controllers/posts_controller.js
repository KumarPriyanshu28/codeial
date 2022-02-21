const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res){

    try{
        await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        req.flash('success','Post created!');
        return res.redirect('back');

    }catch(err){
        req.flash('error',err);
        return res.redirect('back');
    }

}


module.exports.destroy = async function(req, res){
    // .id means converting the object id into string
    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();
            req.flash('success','Post and associative comments deleted!');

            await Comment.deleteMany({post: req.params.id});
            return res.redirect('back');

        }else{
            req.flash('error','You cannot delete this post!');
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error',err);
        return res.redirect('back');
    }
    
}