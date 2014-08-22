module.exports=function(root){
	return{
		mongodb:'mongodb://127.0.0.1:27017/blogdb',
		model:root+'/model/',
		view:root+'/view/',
		controller:root+'/controller/',
		secret:'',
		port:8080
	}
}