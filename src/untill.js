const isCheckJSONString = (access_Token) => {
    // console.log("access_Token: ", JSON.parse(access_Token));
    if (access_Token) {
        return JSON.parse(access_Token)
    }else{
        console.log("You haven't access_token!");
    }
    return;
}
export { isCheckJSONString }