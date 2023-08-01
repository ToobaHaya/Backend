const {Brand} = require('./model')
const mongoose = require('mongoose')
require('dotenv').config()

const AddBrand = async (req,res) => {
  
    const {brandId, BrandName, BrandImage } =  req.body
    if(!BrandName || !BrandImage ){
        req.json({
            message:"Please insert proper value"
        })
    }
    else{
        try {
            await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
        const existingBrand = await Brand.exists({ BrandName: BrandName })
        const existingid = await Category.exists({ brandId:     brandId })
        if(existingBrand) {
            res.status(208).json({
                message: "Brand Already Exists"
            })
        }
        else if (existingid) {
            res.status(208).json({
              message: "Brand Id already exists",
            });
        }
        else{
      await Brand.create({brandId, BrandName, BrandImage })
      res.status(201).json({
        message : "brand created successfully"
      })
        }
    }
         catch (error) {
            res.json({
                message: error.message
            })
    
    }
}
}

const brandByID = async (req,res) => {

    const { brandId } = req.params
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Brands = await Brand.findOne({ brandId : brandId  })
        res.json(
            {
                Brands: Brands
            }
        )

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}


const getAllBrands = async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Brands = await Brand.find()
        res.json(
            {
               Brands: Brands
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const brandByName = async (req,res) => {

    const { BrandName } = req.params
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const Brands = await Brand.findOne({ BrandName : BrandName  })
        res.json(
            {
                Brands: Brands
            }
        )

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}
const deleteAllBrands = async (req, res) => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      await Brand.deleteMany({});
  
      res.json({
        message: 'All brands deleted successfully.',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  

  const updateBrand = async (req, res) => {
    const { brandId } = req.params;
    const updateData = req.body; 
  
    try {
        await mongoose.connect(process.env.MONGO_URL);
    
        const updatedBrand = await Brand.findByIdAndUpdate(brandId, updateData, { new: true });
    
        if (!updatedBrand) {
          return res.status(404).json({
            message: 'Brand not found.',
          });
        }
    
        res.json({
          message: 'Brand updated successfully.', updatedBrand,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }

module.exports = { AddBrand , brandByID , getAllBrands , brandByName , deleteAllBrands , updateBrand } 