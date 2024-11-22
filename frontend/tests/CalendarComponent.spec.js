import { mount } from '@vue/test-utils';
import CalendarComponent from '@/components/CalendarComponent.vue';
import DayComponent from '@/components/DayComponent.vue';

describe('CalendarComponent', () => {
  it('renders 31 DayComponent elements', () => {
    const wrapper = mount(CalendarComponent);
    const dayComponents = wrapper.findAllComponents(DayComponent);
    expect(dayComponents).toHaveLength(31);
  });

  it('opens a surprise when a day is clicked', async () => {
    const wrapper = mount(CalendarComponent);
    const dayComponents = wrapper.findAllComponents(DayComponent);

    // Simulate opening the first day's surprise
    await dayComponents[0].vm.$emit('openSurprise', 1, 'Believe in the magic of the season! 🌟');

    expect(wrapper.text()).toContain('Surprise for December 1');
    expect(wrapper.text()).toContain('Believe in the magic of the season! 🌟');
  });

  it('closes the surprise modal', async () => {
    const wrapper = mount(CalendarComponent);

    // Open a surprise
    await wrapper.vm.openSurprise(1, 'Test Surprise');
    expect(wrapper.vm.selectedSurprise).toBe('Test Surprise');

    // Close the surprise
    await wrapper.vm.closeSurprise();
    expect(wrapper.vm.selectedSurprise).toBe(null);
  });
});
