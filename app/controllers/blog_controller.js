

export const createBlog=async(req,res)=>{
    try {
        res.json("Blog created successfully")
    } catch (error) {
        console.log(error)
    }
}
export const readBlog=async(req,res)=>{
    try {
        res.json("Blog read successfully")
    } catch (error) {
        console.log(error)
    }
}
export const updateBlog=async(req,res)=>{
    try {
        res.json("Blog update successfully")
    } catch (error) {
        console.log(error)
    }
}
export const deleteBlog=async(req,res)=>{
    try {
        res.json("Blog delete successfully")
    } catch (error) {
        console.log(error)
    }
}

