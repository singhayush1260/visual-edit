const base64ToBlobImage=(base64Image)=> {
    // Remove the data:image/jpeg;base64, prefix
    const base64Data = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  
    // Convert the base64 data to a binary string
    const binaryString = atob(base64Data);
  
    // Create an ArrayBuffer from the binary string
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
  
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
  
    // Create a Blob from the ArrayBuffer
    const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
  
    // Create a URL for the Blob to use as the image source
    const imageUrl = URL.createObjectURL(blob);
  
    return imageUrl;
  }