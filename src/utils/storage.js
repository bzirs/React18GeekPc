const TOKEN = 'react18_itcast_geek_pc'

/**
 * @description 存储token
 * @param {*} obj
 * @returns
 */
export const setStorageToken = obj => localStorage.setItem(TOKEN, JSON.stringify(obj))

/**
 * @description 获取本地token
 * @param {*} _
 * @returns
 */
export const getStorageToken = _ => localStorage.getItem(TOKEN)

/**
 * @description 删除本地存储
 * @param {*} _
 * @returns
 */
export const removeStorageToken = _ => localStorage.removeItem(TOKEN)
