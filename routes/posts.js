const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/// Get ALL Blog Post.
router.get('/', async (req , res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err){
        res.json({message: err});
    }
});

//// Create A Blog....
router.post('/',  async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        comment: req.body.comment
 });
 try{
  const savedPost = await post.save()
  res.json(savedPost);
 } catch (err) {
     res.json({message: err});
 }

});
  
 ///Get Post by id .....
    router.get('/:postId', async(req,res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
 } catch (err) {
     res.json({message: err});
 }
    });

    ///// Delete Blog....
  router.delete('/:postId', async(req,res) =>{
      try{
          const deletepost = await Post.remove({_id: req.params.postId });
          res.json(deletepost);
      }catch (err) {
        res.json({message: err});
    }
       });

////// Update Blog......
 router.patch('/:postId', async(req,res) =>{
     try{
     const updatedpost = await Post.updateOne({_id: req.params.postId});
     res.json(updatedpost);
     }catch (err) {
        res.json({message: err});
    };
});
  /////Add all comments on a blog post.....
  router.post('/:postId/comment',  async (req,res)=>{
      const id = req.params.id;
    const comment = new Comment({
        text: req.body.comment,
        post: id
 });
 try{
    const savedcomment = await comment.save()
    res.json(savedcomment);
   } catch (err) {
       res.json({message: err});
   }
});
///////Get all comment.....
router.get('/:id/comment', async(req,res) =>{
    try{
    const allcomment = await Post.find();
    allcomment.comment.push(comment);
    res.json(allcomment);
 } catch (err) {
     res.json({message: err});
 }
    });   

/////Get a single comment......
router.get('/:id/comment', async(req,res) =>{
    try{
    const comment = await Post.findById(id);
    res.json(comment);
 } catch (err) {
     res.json({message: err});
 }
    });

 /////Delete a comment on a blog post....
    router.delete('/:/id/comment', async(req,res) =>{
        try{
            const deletecomment = await Post.remove({_id: req.params.id });
            res.json(deletepost);
        }catch (err) {
          res.json({message: err});
      }
         });


 module.exports = router;