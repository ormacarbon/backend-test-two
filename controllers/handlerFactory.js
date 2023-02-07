
exports.getAll = Model => async (req, res, next) => {

  try{
    let filter = {};
    if(req.params.beerId) filter = {tour: req.params.beerId}

    const doc = await Model.find()

    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data:doc
        }
    })
  }catch(err){
    console.log(err)
  }
};