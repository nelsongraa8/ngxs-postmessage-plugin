import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostmessagePlugin } from './postmessage-plugin';

describe('PostmessagePlugin', () => {
  let component: PostmessagePlugin;
  let fixture: ComponentFixture<PostmessagePlugin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostmessagePlugin],
    }).compileComponents();

    fixture = TestBed.createComponent(PostmessagePlugin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
