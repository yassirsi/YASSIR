package com.example.CarParking.Service;

import com.example.CarParking.Model.UserModel;

import java.util.List;

public interface UserService {
    UserModel register(UserModel userModel);
    UserModel login(String username, String password);
    UserModel updateUser(Long id, UserModel userModel);
    void deleteUser(Long id);
    List<UserModel> getAllUsers();
}
