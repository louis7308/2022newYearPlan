import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if(!req.user) {
      return '구글 정보에 없는 유저입니다.'
    }
    return {
      message: '구글 정보에 존재하는 유저 입니다.',
      user: req.user
    }
  }
}




