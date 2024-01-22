const Chop = ({ingredientName,ingredientTitle,ingredientImage})=>{
    
    
    
      return (
        <>
     <div className='pizza'>
     <img src={ingredientImage}/>
     <div>
        <h3>{ingredientName}</h3> 
        <h4>{ingredientTitle}</h4> 
     </div>
     
     </div>
        </>
         )
    }
    export default Chop