import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCreateComponent } from './poke-create.component';

describe('PokeCreateComponent', () => {
  let component: PokeCreateComponent;
  let fixture: ComponentFixture<PokeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
