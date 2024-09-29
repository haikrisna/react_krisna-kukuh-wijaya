async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                message: "Data berhasil diambil!",
                timestamp: new Date().toISOString(),
            };
            resolve(data); 
        }, 2000); 
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

getData();
