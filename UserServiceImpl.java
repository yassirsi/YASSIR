package com.example.CarParking.Service;

import com.example.CarParking.Model.UserModel;
import com.example.CarParking.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserModel register(UserModel userModel) {
        return userRepository.save(userModel);
    }

    @Override
    public UserModel login(String username, String password) {
        Optional<UserModel> user = userRepository.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        return null;
    }

    @Override
    public UserModel updateUser(Long id, UserModel userModel) {
        Optional<UserModel> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            UserModel existingUser = userOptional.get();
            existingUser.setUsername(userModel.getUsername());
            existingUser.setEmail(userModel.getEmail());
            existingUser.setPassword(userModel.getPassword());
            return userRepository.save(existingUser);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }
}
