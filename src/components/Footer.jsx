const Footer = ()=>{
    const hr = new Date().getHours()
    const minutes = new Date().getMinutes()
    // console.log(day)
    return (
      <>
      <div style={{textAlign:'center'}} >
      <h2> {new Date().toLocaleDateString()} {hr}-{minutes}  </h2>
      <h1>Proudly Us From Nigeria</h1>
     
      </div>
      
      </>
    )
  }
  export default Footer