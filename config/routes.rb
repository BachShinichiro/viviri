Rails.application.routes.draw do
  get 'audition/index'
  get 'about/index'
  resources :tops
  root 'tops#index'
end
