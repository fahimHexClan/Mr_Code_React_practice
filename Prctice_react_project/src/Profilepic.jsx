function ProfilePic(){
    const imageUrl='./src/assets/Fahim.jpg';
    const handleClick =(e) => e.target.style.display ="none";//image eka butoon ekak widihata use karanna puluwan

    return(<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>);

}

export default ProfilePic