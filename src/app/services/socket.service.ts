import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { AppSettings } from '../config/config';
import { NavigationController } from '../controllers/navigation.controller';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
    private socket;

    constructor(private navigationController: NavigationController) {

    }
}