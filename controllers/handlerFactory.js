
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

exports.updateOne = Model => async (req, res, next) => {


  console.log(req.body);
  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
  })

  if(!doc){
      return next(new AppError('No document found with that ID', 404))
  }

  res.status(200).json({
      status: 'success',
      data: {
         data:doc
      }
  });

};

exports.createOne = Model => async (req, res, next) => {

  const doc = await Model.create(req.body);

  res.status(201).json({
      status:'success',
      data:{
          data:doc
      }
  })
}