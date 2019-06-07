import { TestBed } from '@angular/core/testing';

import { Project.ServiceService } from './project.service.service';

describe('Project.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Project.ServiceService = TestBed.get(Project.ServiceService);
    expect(service).toBeTruthy();
  });
});
