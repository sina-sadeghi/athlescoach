export const setTokenStorage = (token1, token2) => {
    localStorage.setItem('token1', token1);
    localStorage.setItem('token2', token2);
}

export const setToken2Storage = token2 => {
    localStorage.setItem('token2', token2);
}

export const getToken1Storage = () => localStorage.getItem('token1');
export const getToken2Storage = () => localStorage.getItem('token2');
export const getUserStorage = () => localStorage.getItem('user')



//
//
// class Storage {
//
//     static emptyPage = {
//         auth_info: {},
//         avatar_url: "",
//         id: 0,
//         interface_id: 0,
//         interface_msg: "",
//         is_active: false,
//         is_enabled: false,
//         is_setup_required: false,
//         offline_msg: "",
//         update_time: "",
//         user_id: 0,
//         username: "",
//         welcome_msg: ""
//     }
//
//     constructor() {
//     }
//
//     static checkMobileVerified() {
//         return localStorage.getItem('mobile_validated');
//     }
//
//     static setMobileVerified(verification) {
//         localStorage.setItem('mobile_validated', verification);
//     }
//
//     static checkUserSubscription() {
//         return localStorage.getItem('user_subscription');
//     }
//
//     static setUserSubscription(subscription) {
//         localStorage.setItem('user_subscription', subscription);
//     }
//
//     static getUserInfo() {
//         return JSON.parse(localStorage.getItem('user_info'));
//     }
//
//     static getActivePage() {
//         if (localStorage.getItem('active_page') === 'undefined' || !localStorage.getItem('active_page')) {
//             return this.emptyPage;
//         }
//         return JSON.parse(localStorage.getItem('active_page'));
//     }
//
//     static setActivePage(page) {
//         if (!Object.keys(page).length) {
//             this.setActivePageId(0);
//             return localStorage.setItem('active_page', JSON.stringify(this.emptyPage));
//         }
//         this.setActivePageId(page.id);
//         return localStorage.setItem('active_page', JSON.stringify(page));
//     }
//
//     static unsetActivePage() {
//         return localStorage.removeItem('active_page');
//     }
//
//     static unsetPageList() {
//         return localStorage.setItem('page_list','[]');
//     }
//
//     static setActivePageId(id) {
//         return localStorage.setItem('active_page_id', id);
//     }
//
//     static getActivePageId() {
//         return parseInt(localStorage.getItem('active_page_id') || 0);
//     }
//
//     static getPageList() {
//         return JSON.parse(localStorage.getItem('page_list')) || [];
//     }
//
//     static setPageList(list) {
//         return localStorage.setItem('page_list', JSON.stringify(list));
//     }
//
//     static setUserInfo(user) {
//         const info = {
//             display_name: user.display_name,
//             token: user.token,
//             id: user.user_id,
//             avatar: user.avatar_url,
//             isAdmin: user.is_admin
//         };
//         localStorage.setItem('user_info', JSON.stringify(info));
//     }
//
//     static setUserInfoWithoutToken(user) {
//         const info = this.getUserInfo();
//         info.display_name = user.display_name;
//         info.avatar = user.avatar_url;
//         localStorage.setItem('user_info', JSON.stringify(info));
//     }
//
//     static setUserAvatar(avatar) {
//         const info = this.getUserInfo();
//         info.avatar = avatar;
//         localStorage.setItem('user_info', JSON.stringify(info));
//     }
//
//     static isMobileValidate() {
//         return parseInt(localStorage.getItem('mobile_validated'));
//     }
//
//     static isLogin() {
//         return !!this.getUserInfo();
//     }
//
//     static removeStorageData() {
//         localStorage.clear();
//     }
//
//     static setChatTab(item) {
//         localStorage.setItem('chat_tab', item);
//     }
//
//     static getChatTab() {
//         return parseInt(localStorage.getItem('chat_tab'));
//     }
//
//     static setLanguage(lang) {
//         localStorage.setItem('language', lang)
//     }
//
//     static getLanguage() {
//         return localStorage.getItem('language')
//     }
//
//     static isIndexDBsupported(){
//         return localStorage.getItem('indexdb')
//     }
//
//     static getPageType(){
//         return JSON.parse(localStorage.getItem('active_page'))?.interface_type_id;
//     }
// }
//
// export default Storage;