package com.testing.hello.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.testing.hello.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
