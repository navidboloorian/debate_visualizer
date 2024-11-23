import { TestBed } from '@angular/core/testing';

import { TreeSettingsService } from './tree-settings.service';

describe('TreeSettingsService', () => {
  let service: TreeSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
