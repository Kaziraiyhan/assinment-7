// comment 

// Create a new blog post
exports.create = (req, res) => {
    res.status(201).json({ status: "success", data: "comment post created" });
  };
  
  // Read a blog post by ID
  exports.read = (req, res) => {
    res.status(200).json({ status: "success", data: "comment post details" });
  };
  
  // Update a blog post by ID
  exports.update = (req, res) => {
    res.status(200).json({ status: "success", data: "comment updated" });
  };
  
  // Delete a blog post by ID
  exports.delete = (req, res) => {
    res.status(204).json(); // No content in response for a successful delete
  };
  
  