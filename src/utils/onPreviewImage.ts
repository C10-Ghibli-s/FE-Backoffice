
export const onPreviewImage = (e:any, setImage:any) => {
  if(e.target.name === "movieBanner"){
    let file = e.target.files[0]
    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2) {
        setImage(reader.result)
      }
    }

    if(file) {
      reader.readAsDataURL(file);
    }
  }
}
