import { TestBed } from '@angular/core/testing';

import { WebsocketChat } from './websocket-chat';

describe('WebsocketChat', () => {
  let service: WebsocketChat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketChat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
