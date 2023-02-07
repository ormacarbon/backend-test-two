
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


exports.getOne = (Model) => async (req, res, next) => {
  let query = Model.findById(req.params.id);

  const doc = await query;

  if(!doc){
      return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
      status: 'success',
      data:{
          data:doc
      }
  });

}