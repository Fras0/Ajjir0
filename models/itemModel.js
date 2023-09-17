const mongoose = require("mongoose");
const slugify = require("slugify");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An item must have a name"],
      trim: true,
      maxlength: [
        30,
        "An item name must have less than or equal 30 characters",
      ],
    },
    slug: String,
    discription: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, "An item must have a duration"],
    },
    price: {
      type: Number,
      required: [true, "An item must have a price"],
    },
    category: {
      type: String,
      required: [true, "An item must have a category"],
    },
    imageCover: {
      type: String,
      required: [true, "An item must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

itemSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
