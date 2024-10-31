import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSizeCalculatorComponent } from './node-size-calculator.component';

describe('NodeSizeCalculatorComponent', () => {
  let component: NodeSizeCalculatorComponent;
  let fixture: ComponentFixture<NodeSizeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeSizeCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeSizeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
