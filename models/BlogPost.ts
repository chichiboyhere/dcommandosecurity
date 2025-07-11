// import mongoose, { Document, Schema } from "mongoose";

// // Define the interface for the comment
// interface IComment {
//   name: string;
//   email: string;
//   comment: string;
//   postedAt: Date;
// }

// // Define the interface for the blog post
// interface IBlogPost extends Document {
//   title: string;
//   content: string;
//   images: string[];
//   createdAt: Date;
//   updatedAt: Date;
//   comments: IComment[];
// }

// // Create the comment schema
// const CommentSchema: Schema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   comment: { type: String, required: true },
//   postedAt: { type: Date, default: Date.now },
// });

// // Create the blog post schema
// const BlogPostSchema: Schema = new Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   images: { type: [String], default: [] },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
//   comments: { type: [CommentSchema], default: [] },
//   // title: String,
//   // content: String,
//   // images: [String], // ✅ Optional string array
//   // createdAt: Date,
//   // updatedAt: Date,
//   // comments: { type: [Schema.Types.Mixed], default: [] },
// });

// // Middleware to update the updatedAt field before saving
// BlogPostSchema.pre<IBlogPost>("save", function (next) {
//   this.updatedAt = new Date();
//   next();
// });

// // Create the model
// //const BlogPost = mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);
// const BlogPost =
//   mongoose.models.BlogPost ||
//   mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

// export default BlogPost;

// models/BlogPost.ts
import mongoose, { Document, Schema } from "mongoose";

interface IComment {
  name: string;
  email: string;
  comment: string;
  postedAt: Date;
}

interface IBlogPost extends Document {
  title: string;
  content: string;
  images: mongoose.Types.ObjectId[]; // Change to ObjectId
  createdAt: Date;
  updatedAt: Date;
  comments: IComment[];
}

const CommentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
});

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  images: { type: [Schema.Types.ObjectId], ref: "uploads" }, // Reference to GridFS
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: { type: [CommentSchema], default: [] },
});

BlogPostSchema.pre<IBlogPost>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const BlogPost =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPost;
