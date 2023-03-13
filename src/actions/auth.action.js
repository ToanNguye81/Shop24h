export const guiToken = async () => {
    console.log("gui Token")
    try {
      const response = await fetch('//localhost:8000/auth', {
        method: 'GET',
        credentials: 'include' // Đảm bảo cookies sẽ được gửi kèm theo yêu cầu
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };    