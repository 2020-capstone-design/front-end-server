// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from './index';
import { posts } from './index';

// 회원가입 API
function registerUser(userData) {
  return instance.post('/auth/signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('/auth/login', userData);
}

//아이디 찾기 API
function findUserId(userData) {
  return instance.post('/auth/get_owner_id', userData);
}

//비밀번호 찾기 API
function findUserPassword(userData) {
  return instance.patch('/auth/update_random_password', userData);
}

//회원정보관리 API
function fetchUserInfo(userId) {
  return posts.get(`/owner/owner_info/${userId}`);
}

function updateUser(userData) {
  return posts.patch('/owner/update_owner_info', userData);
}

function updateUserPassword(userData) {
  return posts.patch('/owner/update_owner_password', userData);
}

//회원탈퇴 API
function deleteUser(userId) {
  return posts.delete(`/owner/delete_owner/${userId}`);
}

export {
  registerUser,
  loginUser,
  findUserId,
  findUserPassword,
  fetchUserInfo,
  updateUser,
  updateUserPassword,
  deleteUser,
};
