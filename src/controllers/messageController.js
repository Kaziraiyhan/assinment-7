

// Create a new blog post
exports.create = (req, res) => {
    res.status(201).json({ status: "success", data: "Message sent" });
  };
  
  // Read a blog post by ID
  exports.read = (req, res) => {
    res.status(200).json({ status: "success", data: "message details" });
  };
  
  // Update a blog post by ID
  exports.update = (req, res) => {
    res.status(200).json({ status: "success", data: "message  updated" });
  };
  
  // Delete a blog post by ID
  exports.delete = (req, res) => {
    res.status(204).json(); // No content in response for a successful delete
  };
  