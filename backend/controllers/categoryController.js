import CategoryModel from "../models/categoryModel.js";

//get categories
export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find().populate();

    return res.status(200).json({
      success: true,
      message: "categories fetch successfully",
      categories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//create gende}r
export const createGender = async (req, res) => {
  try {
    const gender = await CategoryModel.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Gender created successfully",
      gender,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//create Category
export const createCategory = async (req, res) => {
  try {
    const { gender, category } = req.body;

    let getGender = await CategoryModel.findOne({ gender });

    getGender.categories.push({
      category,
    });

    await getGender.save();

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      getGender,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//create type
export const createtype = async (req, res) => {
  try {
    const { gender, category, type } = req.body;

    let getGender = await CategoryModel.findOne({ gender });

    let clothCategories = getGender.categories.find(
      (e) => e.category === category
    );

    clothCategories.types.push({
      type,
    });

    await getGender.save();

    return res.status(201).json({
      success: true,
      message: "Type created successfully",
      getGender,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//create variant
export const createVariant = async (req, res) => {
  try {
    const { gender, category, type, variant } = req.body;

    let getGender = await CategoryModel.findOne({ gender });

    let clothCategories = getGender.categories.find(
      (e) => e.category === category
    );

    let clothTypes = clothCategories.types.find((e) => e.type === type);

    clothTypes.variants.push({ variant });

    await getGender.save();

    return res.status(201).json({
      success: true,
      message: "Variant created successfully",
      getGender,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
