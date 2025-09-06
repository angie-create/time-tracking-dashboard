// Time Tracking Dashboard JavaScript

class TimeTrackingDashboard {
  constructor() {
    this.data = [];
    this.currentTimeframe = 'weekly';
    this.init();
  }

  async init() {
    try {
      await this.loadData();
      this.setupEventListeners();
      this.updateDisplay();
    } catch (error) {
      console.error('Failed to initialize dashboard:', error);
    }
  }

  async loadData() {
    try {
      const response = await fetch('./data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Failed to load data:', error);
      throw error;
    }
  }

  setupEventListeners() {
    // Time period buttons
    const timeButtons = document.querySelectorAll('[data-timeframe]');
    timeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.changeTimeframe(e.target.dataset.timeframe);
      });
    });
  }

  changeTimeframe(newTimeframe) {
    if (newTimeframe === this.currentTimeframe) return;
    
    // Update current timeframe
    this.currentTimeframe = newTimeframe;
    
    // Update active button state
    this.updateActiveButton();
    
    // Update display
    this.updateDisplay();
  }

  updateActiveButton() {
    const buttons = document.querySelectorAll('[data-timeframe]');
    buttons.forEach(button => {
      button.classList.toggle('active', button.dataset.timeframe === this.currentTimeframe);
    });
  }

  updateDisplay() {
    this.data.forEach(activity => {
      const activityElement = document.querySelector(`[data-activity="${activity.title.toLowerCase().replace(' ', '-')}"]`);
      if (activityElement) {
        this.updateActivityCard(activityElement, activity);
      }
    });
  }

  updateActivityCard(element, activity) {
    const timeframe = activity.timeframes[this.currentTimeframe];
    const currentHours = timeframe.current;
    const previousHours = timeframe.previous;
    
    // Update current hours
    const currentElement = element.querySelector('[data-current]');
    if (currentElement) {
      currentElement.textContent = this.formatHours(currentHours);
    }
    
    // Update previous hours with correct text
    const previousElement = element.querySelector('[data-previous]');
    if (previousElement) {
      const previousText = this.getPreviousText(this.currentTimeframe);
      previousElement.textContent = `${previousText} - ${this.formatHours(previousHours)}`;
    }
  }

  formatHours(hours) {
    if (hours === 0) return '0hr';
    return hours === 1 ? '1hr' : `${hours}hrs`;
  }

  getPreviousText(timeframe) {
    switch (timeframe) {
      case 'daily':
        return 'Yesterday';
      case 'weekly':
        return 'Last Week';
      case 'monthly':
        return 'Last Month';
      default:
        return 'Previous';
    }
  }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TimeTrackingDashboard();
});